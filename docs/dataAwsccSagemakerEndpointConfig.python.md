# `dataAwsccSagemakerEndpointConfig` Submodule <a name="`dataAwsccSagemakerEndpointConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpointConfigA <a name="DataAwsccSagemakerEndpointConfigA" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#id DataAwsccSagemakerEndpointConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerEndpointConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerEndpointConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpointConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig">async_inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig">data_capture_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn">endpoint_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName">endpoint_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig">explainer_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants">production_variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants">shadow_production_variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `async_inference_config`<sup>Required</sup> <a name="async_inference_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig"></a>

```python
async_inference_config: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a>

---

##### `data_capture_config`<sup>Required</sup> <a name="data_capture_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig"></a>

```python
data_capture_config: DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a>

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint_config_arn`<sup>Required</sup> <a name="endpoint_config_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn"></a>

```python
endpoint_config_arn: str
```

- *Type:* str

---

##### `endpoint_config_name`<sup>Required</sup> <a name="endpoint_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName"></a>

```python
endpoint_config_name: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `explainer_config`<sup>Required</sup> <a name="explainer_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig"></a>

```python
explainer_config: DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig"></a>

```python
metrics_config: DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a>

---

##### `production_variants`<sup>Required</sup> <a name="production_variants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants"></a>

```python
production_variants: DataAwsccSagemakerEndpointConfigProductionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a>

---

##### `shadow_production_variants`<sup>Required</sup> <a name="shadow_production_variants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants"></a>

```python
shadow_production_variants: DataAwsccSagemakerEndpointConfigShadowProductionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags"></a>

```python
tags: DataAwsccSagemakerEndpointConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig"></a>

```python
vpc_config: DataAwsccSagemakerEndpointConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfigAConfig <a name="DataAwsccSagemakerEndpointConfigAConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#id DataAwsccSagemakerEndpointConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig()
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig()
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig()
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig()
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfig <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig()
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader()
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions()
```


### DataAwsccSagemakerEndpointConfigExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig()
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig()
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig()
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig()
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig()
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig()
```


### DataAwsccSagemakerEndpointConfigMetricsConfig <a name="DataAwsccSagemakerEndpointConfigMetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig()
```


### DataAwsccSagemakerEndpointConfigProductionVariants <a name="DataAwsccSagemakerEndpointConfigProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig()
```


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariants <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig()
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig()
```


### DataAwsccSagemakerEndpointConfigTags <a name="DataAwsccSagemakerEndpointConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags()
```


### DataAwsccSagemakerEndpointConfigVpcConfig <a name="DataAwsccSagemakerEndpointConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">max_concurrent_invocations_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_invocations_per_instance`<sup>Required</sup> <a name="max_concurrent_invocations_per_instance" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```python
max_concurrent_invocations_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">error_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn">include_inference_response_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">success_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_topic`<sup>Required</sup> <a name="error_topic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```python
error_topic: str
```

- *Type:* str

---

##### `include_inference_response_in`<sup>Required</sup> <a name="include_inference_response_in" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn"></a>

```python
include_inference_response_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `success_topic`<sup>Required</sup> <a name="success_topic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```python
success_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">s3_failure_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```python
notification_config: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `s3_failure_path`<sup>Required</sup> <a name="s3_failure_path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```python
s3_failure_path: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig">client_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```python
client_config: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```python
output_config: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">csv_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">json_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_content_types`<sup>Required</sup> <a name="csv_content_types" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```python
csv_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_content_types`<sup>Required</sup> <a name="json_content_types" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```python
json_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">capture_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_mode`<sup>Required</sup> <a name="capture_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```python
capture_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader">capture_content_type_header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions">capture_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri">destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture">enable_capture</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage">initial_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_content_type_header`<sup>Required</sup> <a name="capture_content_type_header" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```python
capture_content_type_header: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `capture_options`<sup>Required</sup> <a name="capture_options" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions"></a>

```python
capture_options: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a>

---

##### `destination_s3_uri`<sup>Required</sup> <a name="destination_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```python
destination_s3_uri: str
```

- *Type:* str

---

##### `enable_capture`<sup>Required</sup> <a name="enable_capture" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture"></a>

```python
enable_capture: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `initial_sampling_percentage`<sup>Required</sup> <a name="initial_sampling_percentage" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```python
initial_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigDataCaptureConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate">content_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders">feature_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute">features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes">feature_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute">label_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders">label_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex">label_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb">max_payload_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount">max_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex">probability_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_template`<sup>Required</sup> <a name="content_template" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate"></a>

```python
content_template: str
```

- *Type:* str

---

##### `feature_headers`<sup>Required</sup> <a name="feature_headers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders"></a>

```python
feature_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `features_attribute`<sup>Required</sup> <a name="features_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute"></a>

```python
features_attribute: str
```

- *Type:* str

---

##### `feature_types`<sup>Required</sup> <a name="feature_types" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes"></a>

```python
feature_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_attribute`<sup>Required</sup> <a name="label_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute"></a>

```python
label_attribute: str
```

- *Type:* str

---

##### `label_headers`<sup>Required</sup> <a name="label_headers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders"></a>

```python
label_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_index`<sup>Required</sup> <a name="label_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex"></a>

```python
label_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_payload_in_mb`<sup>Required</sup> <a name="max_payload_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb"></a>

```python
max_payload_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_record_count`<sup>Required</sup> <a name="max_record_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount"></a>

```python
max_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `probability_index`<sup>Required</sup> <a name="probability_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex"></a>

```python
probability_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations">enable_explanations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig">inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig">shap_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_explanations`<sup>Required</sup> <a name="enable_explanations" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations"></a>

```python
enable_explanations: str
```

- *Type:* str

---

##### `inference_config`<sup>Required</sup> <a name="inference_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig"></a>

```python
inference_config: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a>

---

##### `shap_config`<sup>Required</sup> <a name="shap_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig"></a>

```python
shap_config: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples">number_of_samples</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed">seed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig">shap_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig">text_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit">use_logit</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_samples`<sup>Required</sup> <a name="number_of_samples" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples"></a>

```python
number_of_samples: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed`<sup>Required</sup> <a name="seed" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed"></a>

```python
seed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shap_baseline_config`<sup>Required</sup> <a name="shap_baseline_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig"></a>

```python
shap_baseline_config: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a>

---

##### `text_config`<sup>Required</sup> <a name="text_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig"></a>

```python
text_config: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a>

---

##### `use_logit`<sup>Required</sup> <a name="use_logit" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit"></a>

```python
use_logit: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline">shap_baseline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri">shap_baseline_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `shap_baseline`<sup>Required</sup> <a name="shap_baseline" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline"></a>

```python
shap_baseline: str
```

- *Type:* str

---

##### `shap_baseline_uri`<sup>Required</sup> <a name="shap_baseline_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri"></a>

```python
shap_baseline_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig">clarify_explainer_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clarify_explainer_config`<sup>Required</sup> <a name="clarify_explainer_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig"></a>

```python
clarify_explainer_config: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigExplainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability">enable_detailed_observability</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics">enable_enhanced_metrics</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_detailed_observability`<sup>Required</sup> <a name="enable_detailed_observability" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability"></a>

```python
enable_detailed_observability: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_enhanced_metrics`<sup>Required</sup> <a name="enable_enhanced_metrics" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics"></a>

```python
enable_enhanced_metrics: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `metric_publish_frequency_in_seconds`<sup>Required</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">ml_reservation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `ml_reservation_arn`<sup>Required</sup> <a name="ml_reservation_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```python
ml_reservation_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_s3_uri`<sup>Required</sup> <a name="destination_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```python
destination_s3_uri: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">model_name_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `model_name_override`<sup>Required</sup> <a name="model_name_override" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```python
model_name_override: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">scale_in_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_policy`<sup>Required</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```python
scale_in_policy: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">cooldown_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">maximum_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_in_minutes`<sup>Required</sup> <a name="cooldown_in_minutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```python
cooldown_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_step_size`<sup>Required</sup> <a name="maximum_step_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```python
maximum_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig">capacity_reservation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig">core_dump_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess">enable_ssm_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion">inference_ami_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount">initial_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight">initial_variant_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools">instance_pools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling">managed_instance_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig">serverless_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">variant_instance_provision_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName">variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_config`<sup>Required</sup> <a name="capacity_reservation_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```python
capacity_reservation_config: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_dump_config`<sup>Required</sup> <a name="core_dump_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig"></a>

```python
core_dump_config: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `enable_ssm_access`<sup>Required</sup> <a name="enable_ssm_access" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess"></a>

```python
enable_ssm_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `inference_ami_version`<sup>Required</sup> <a name="inference_ami_version" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```python
inference_ami_version: str
```

- *Type:* str

---

##### `initial_instance_count`<sup>Required</sup> <a name="initial_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount"></a>

```python
initial_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_variant_weight`<sup>Required</sup> <a name="initial_variant_weight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight"></a>

```python
initial_variant_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_pools`<sup>Required</sup> <a name="instance_pools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools"></a>

```python
instance_pools: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `managed_instance_scaling`<sup>Required</sup> <a name="managed_instance_scaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```python
managed_instance_scaling: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig"></a>

```python
routing_config: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a>

---

##### `serverless_config`<sup>Required</sup> <a name="serverless_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig"></a>

```python
serverless_config: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a>

---

##### `variant_instance_provision_timeout_in_seconds`<sup>Required</sup> <a name="variant_instance_provision_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```python
variant_instance_provision_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">prefix_aware_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy">routing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_aware_routing_config`<sup>Required</sup> <a name="prefix_aware_routing_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```python
prefix_aware_routing_config: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `routing_strategy`<sup>Required</sup> <a name="routing_strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```python
routing_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">concurrency_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrency_threshold`<sup>Required</sup> <a name="concurrency_threshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```python
concurrency_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memory_size_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">provisioned_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_mb`<sup>Required</sup> <a name="memory_size_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```python
memory_size_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_concurrency`<sup>Required</sup> <a name="provisioned_concurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```python
provisioned_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">ml_reservation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `ml_reservation_arn`<sup>Required</sup> <a name="ml_reservation_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```python
ml_reservation_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_s3_uri`<sup>Required</sup> <a name="destination_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```python
destination_s3_uri: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">model_name_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `model_name_override`<sup>Required</sup> <a name="model_name_override" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```python
model_name_override: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">scale_in_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_policy`<sup>Required</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```python
scale_in_policy: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">cooldown_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">maximum_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_in_minutes`<sup>Required</sup> <a name="cooldown_in_minutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```python
cooldown_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_step_size`<sup>Required</sup> <a name="maximum_step_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```python
maximum_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig">capacity_reservation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig">core_dump_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess">enable_ssm_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion">inference_ami_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount">initial_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight">initial_variant_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools">instance_pools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling">managed_instance_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig">serverless_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">variant_instance_provision_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName">variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_config`<sup>Required</sup> <a name="capacity_reservation_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```python
capacity_reservation_config: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_dump_config`<sup>Required</sup> <a name="core_dump_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```python
core_dump_config: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `enable_ssm_access`<sup>Required</sup> <a name="enable_ssm_access" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess"></a>

```python
enable_ssm_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `inference_ami_version`<sup>Required</sup> <a name="inference_ami_version" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```python
inference_ami_version: str
```

- *Type:* str

---

##### `initial_instance_count`<sup>Required</sup> <a name="initial_instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```python
initial_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_variant_weight`<sup>Required</sup> <a name="initial_variant_weight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```python
initial_variant_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_pools`<sup>Required</sup> <a name="instance_pools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools"></a>

```python
instance_pools: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `managed_instance_scaling`<sup>Required</sup> <a name="managed_instance_scaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```python
managed_instance_scaling: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig"></a>

```python
routing_config: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a>

---

##### `serverless_config`<sup>Required</sup> <a name="serverless_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```python
serverless_config: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `variant_instance_provision_timeout_in_seconds`<sup>Required</sup> <a name="variant_instance_provision_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```python
variant_instance_provision_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">prefix_aware_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy">routing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_aware_routing_config`<sup>Required</sup> <a name="prefix_aware_routing_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```python
prefix_aware_routing_config: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `routing_strategy`<sup>Required</sup> <a name="routing_strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```python
routing_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">concurrency_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrency_threshold`<sup>Required</sup> <a name="concurrency_threshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```python
concurrency_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memory_size_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">provisioned_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_mb`<sup>Required</sup> <a name="memory_size_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```python
memory_size_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_concurrency`<sup>Required</sup> <a name="provisioned_concurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```python
provisioned_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigTagsList <a name="DataAwsccSagemakerEndpointConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointConfigTagsOutputReference <a name="DataAwsccSagemakerEndpointConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a>

---


### DataAwsccSagemakerEndpointConfigVpcConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint_config

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a>

---



