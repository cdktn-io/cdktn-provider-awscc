# `dataAwsccSagemakerModelExplainabilityJobDefinition` Submodule <a name="`dataAwsccSagemakerModelExplainabilityJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinition <a name="DataAwsccSagemakerModelExplainabilityJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model_explainability_job_definition#id DataAwsccSagemakerModelExplainabilityJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerModelExplainabilityJobDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerModelExplainabilityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model_explainability_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModelExplainabilityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn">job_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification">model_explainability_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig">model_explainability_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput">model_explainability_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig">model_explainability_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList">DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `job_definition_arn`<sup>Required</sup> <a name="job_definition_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn"></a>

```python
job_definition_arn: str
```

- *Type:* str

---

##### `job_definition_name`<sup>Required</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobResources"></a>

```python
job_resources: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a>

---

##### `model_explainability_app_specification`<sup>Required</sup> <a name="model_explainability_app_specification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification"></a>

```python
model_explainability_app_specification: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a>

---

##### `model_explainability_baseline_config`<sup>Required</sup> <a name="model_explainability_baseline_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig"></a>

```python
model_explainability_baseline_config: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a>

---

##### `model_explainability_job_input`<sup>Required</sup> <a name="model_explainability_job_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput"></a>

```python
model_explainability_job_input: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a>

---

##### `model_explainability_job_output_config`<sup>Required</sup> <a name="model_explainability_job_output_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig"></a>

```python
model_explainability_job_output_config: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.networkConfig"></a>

```python
network_config: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.stoppingCondition"></a>

```python
stopping_condition: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tags"></a>

```python
tags: DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList">DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinitionConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model_explainability_job_definition#id DataAwsccSagemakerModelExplainabilityJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition()
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionTags <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri">config_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_uri`<sup>Required</sup> <a name="config_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri"></a>

```python
config_uri: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment"></a>

```python
environment: StringMap
```

- *Type:* cdktn.StringMap

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baselining_job_name`<sup>Required</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

---

##### `constraints_resource`<sup>Required</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource"></a>

```python
constraints_resource: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```python
header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```python
line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```python
csv: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```python
json: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```python
parquet: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute">features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_captured_destination_s3_uri`<sup>Required</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

---

##### `dataset_format`<sup>Required</sup> <a name="dataset_format" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```python
dataset_format: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `features_attribute`<sup>Required</sup> <a name="features_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```python
features_attribute: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute">features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `features_attribute`<sup>Required</sup> <a name="features_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```python
features_attribute: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_transform_input`<sup>Required</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput"></a>

```python
batch_transform_input: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a>

---

##### `endpoint_input`<sup>Required</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput"></a>

```python
endpoint_input: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```python
s3_output: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs">monitoring_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```python
monitoring_outputs: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_explainability_job_definition

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags">DataAwsccSagemakerModelExplainabilityJobDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelExplainabilityJobDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags">DataAwsccSagemakerModelExplainabilityJobDefinitionTags</a>

---



