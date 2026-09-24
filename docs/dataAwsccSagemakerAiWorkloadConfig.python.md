# `dataAwsccSagemakerAiWorkloadConfig` Submodule <a name="`dataAwsccSagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAiWorkloadConfig <a name="DataAwsccSagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config#id DataAwsccSagemakerAiWorkloadConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerAiWorkloadConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">ai_workload_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigName">ai_workload_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigs">ai_workload_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.datasetConfig">dataset_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList">DataAwsccSagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ai_workload_config_arn`<sup>Required</sup> <a name="ai_workload_config_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```python
ai_workload_config_arn: str
```

- *Type:* str

---

##### `ai_workload_config_name`<sup>Required</sup> <a name="ai_workload_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```python
ai_workload_config_name: str
```

- *Type:* str

---

##### `ai_workload_configs`<sup>Required</sup> <a name="ai_workload_configs" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```python
ai_workload_configs: DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `dataset_config`<sup>Required</sup> <a name="dataset_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.datasetConfig"></a>

```python
dataset_config: DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tags"></a>

```python
tags: DataAwsccSagemakerAiWorkloadConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList">DataAwsccSagemakerAiWorkloadConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs()
```


### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec()
```


### DataAwsccSagemakerAiWorkloadConfigConfig <a name="DataAwsccSagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config#id DataAwsccSagemakerAiWorkloadConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAiWorkloadConfigDatasetConfig <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig()
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig()
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource()
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource()
```


### DataAwsccSagemakerAiWorkloadConfigTags <a name="DataAwsccSagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">workload_spec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_spec`<sup>Required</sup> <a name="workload_spec" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```python
workload_spec: DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---


### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">inline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```python
inline: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```python
s3_data_source: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```python
data_source: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```python
input_data_config: DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfig</a>

---


### DataAwsccSagemakerAiWorkloadConfigTagsList <a name="DataAwsccSagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAiWorkloadConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAiWorkloadConfigTagsOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_ai_workload_config

dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags">DataAwsccSagemakerAiWorkloadConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAiWorkloadConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags">DataAwsccSagemakerAiWorkloadConfigTags</a>

---



