# `dataAwsccSagemakerInferenceComponent` Submodule <a name="`dataAwsccSagemakerInferenceComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerInferenceComponent <a name="DataAwsccSagemakerInferenceComponent" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component awscc_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component#id DataAwsccSagemakerInferenceComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerInferenceComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.deploymentConfig">deployment_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentArn">inference_component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentName">inference_component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentStatus">inference_component_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference">DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.specification">specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference">DataAwsccSagemakerInferenceComponentSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.specifications">specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList">DataAwsccSagemakerInferenceComponentSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList">DataAwsccSagemakerInferenceComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.variantName">variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deployment_config`<sup>Required</sup> <a name="deployment_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.deploymentConfig"></a>

```python
deployment_config: DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference</a>

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `inference_component_arn`<sup>Required</sup> <a name="inference_component_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentArn"></a>

```python
inference_component_arn: str
```

- *Type:* str

---

##### `inference_component_name`<sup>Required</sup> <a name="inference_component_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentName"></a>

```python
inference_component_name: str
```

- *Type:* str

---

##### `inference_component_status`<sup>Required</sup> <a name="inference_component_status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.inferenceComponentStatus"></a>

```python
inference_component_status: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.runtimeConfig"></a>

```python
runtime_config: DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference">DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference</a>

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.specification"></a>

```python
specification: DataAwsccSagemakerInferenceComponentSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference">DataAwsccSagemakerInferenceComponentSpecificationOutputReference</a>

---

##### `specifications`<sup>Required</sup> <a name="specifications" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.specifications"></a>

```python
specifications: DataAwsccSagemakerInferenceComponentSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList">DataAwsccSagemakerInferenceComponentSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.tags"></a>

```python
tags: DataAwsccSagemakerInferenceComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList">DataAwsccSagemakerInferenceComponentTagsList</a>

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerInferenceComponentConfig <a name="DataAwsccSagemakerInferenceComponentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component#id DataAwsccSagemakerInferenceComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerInferenceComponentDeploymentConfig <a name="DataAwsccSagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfig()
```


### DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration()
```


### DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms()
```


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy()
```


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize()
```


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize()
```


### DataAwsccSagemakerInferenceComponentRuntimeConfig <a name="DataAwsccSagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfig()
```


### DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus <a name="DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus()
```


### DataAwsccSagemakerInferenceComponentSpecification <a name="DataAwsccSagemakerInferenceComponentSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecification()
```


### DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements()
```


### DataAwsccSagemakerInferenceComponentSpecificationContainer <a name="DataAwsccSagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainer()
```


### DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints()
```


### DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage()
```


### DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig()
```


### DataAwsccSagemakerInferenceComponentSpecifications <a name="DataAwsccSagemakerInferenceComponentSpecifications" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecifications()
```


### DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance <a name="DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance()
```


### DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements <a name="DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements()
```


### DataAwsccSagemakerInferenceComponentSpecificationsContainer <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainer()
```


### DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints()
```


### DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig <a name="DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig()
```


### DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance <a name="DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance()
```


### DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters <a name="DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters()
```


### DataAwsccSagemakerInferenceComponentSpecificationStartupParameters <a name="DataAwsccSagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParameters()
```


### DataAwsccSagemakerInferenceComponentTags <a name="DataAwsccSagemakerInferenceComponentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```python
alarms: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfig">DataAwsccSagemakerInferenceComponentDeploymentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_rollback_configuration`<sup>Required</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `rolling_update_policy`<sup>Required</sup> <a name="rolling_update_policy" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfig">DataAwsccSagemakerInferenceComponentDeploymentConfig</a>

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximum_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_batch_size`<sup>Required</sup> <a name="maximum_batch_size" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```python
maximum_batch_size: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `maximum_execution_timeout_in_seconds`<sup>Required</sup> <a name="maximum_execution_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```python
maximum_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rollback_maximum_batch_size`<sup>Required</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

---


### DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">current_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">desired_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus">placement_status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList">DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfig">DataAwsccSagemakerInferenceComponentRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_count`<sup>Required</sup> <a name="copy_count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```python
copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_copy_count`<sup>Required</sup> <a name="current_copy_count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```python
current_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_copy_count`<sup>Required</sup> <a name="desired_copy_count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```python
desired_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `placement_status`<sup>Required</sup> <a name="placement_status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus"></a>

```python
placement_status: DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList">DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfig">DataAwsccSagemakerInferenceComponentRuntimeConfig</a>

---


### DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList <a name="DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference <a name="DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount">current_copy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus">DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_copy_count`<sup>Required</sup> <a name="current_copy_count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount"></a>

```python
current_copy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus">DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements">DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_required_in_mb`<sup>Required</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required`<sup>Required</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required`<sup>Required</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements">DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds`<sup>Required</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoints">metrics_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_endpoints`<sup>Required</sup> <a name="metrics_endpoints" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoints"></a>

```python
metrics_endpoints: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolutionTime">resolution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolvedImage">resolved_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.specifiedImage">specified_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage">DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolution_time`<sup>Required</sup> <a name="resolution_time" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolutionTime"></a>

```python
resolution_time: str
```

- *Type:* str

---

##### `resolved_image`<sup>Required</sup> <a name="resolved_image" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolvedImage"></a>

```python
resolved_image: str
```

- *Type:* str

---

##### `specified_image`<sup>Required</sup> <a name="specified_image" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.specifiedImage"></a>

```python
specified_image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage">DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">artifact_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig">container_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.deployedImage">deployed_image</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainer">DataAwsccSagemakerInferenceComponentSpecificationContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_url`<sup>Required</sup> <a name="artifact_url" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

---

##### `container_metrics_config`<sup>Required</sup> <a name="container_metrics_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig"></a>

```python
container_metrics_config: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference</a>

---

##### `deployed_image`<sup>Required</sup> <a name="deployed_image" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.deployedImage"></a>

```python
deployed_image: DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```python
environment: StringMap
```

- *Type:* cdktn.StringMap

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainer">DataAwsccSagemakerInferenceComponentSpecificationContainer</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">base_inference_component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference">DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.currentDataCacheConfig">current_data_cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">startup_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference">DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecification">DataAwsccSagemakerInferenceComponentSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_inference_component_name`<sup>Required</sup> <a name="base_inference_component_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```python
base_inference_component_name: str
```

- *Type:* str

---

##### `compute_resource_requirements`<sup>Required</sup> <a name="compute_resource_requirements" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference">DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```python
container: DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference">DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference</a>

---

##### `current_data_cache_config`<sup>Required</sup> <a name="current_data_cache_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.currentDataCacheConfig"></a>

```python
current_data_cache_config: DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference</a>

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig"></a>

```python
scheduling_config: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference</a>

---

##### `startup_parameters`<sup>Required</sup> <a name="startup_parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```python
startup_parameters: DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference">DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecification">DataAwsccSagemakerInferenceComponentSpecification</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `max_imbalance`<sup>Required</sup> <a name="max_imbalance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_balance`<sup>Required</sup> <a name="availability_zone_balance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference</a>

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig">DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">max_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">min_memory_required_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">number_of_accelerator_devices_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">number_of_cpu_cores_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements">DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_required_in_mb`<sup>Required</sup> <a name="max_memory_required_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```python
max_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_required_in_mb`<sup>Required</sup> <a name="min_memory_required_in_mb" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```python
min_memory_required_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_accelerator_devices_required`<sup>Required</sup> <a name="number_of_accelerator_devices_required" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```python
number_of_accelerator_devices_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_cpu_cores_required`<sup>Required</sup> <a name="number_of_cpu_cores_required" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```python
number_of_cpu_cores_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements">DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricPublishFrequencyInSeconds">metric_publish_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricsEndpointPath">metrics_endpoint_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_publish_frequency_in_seconds`<sup>Required</sup> <a name="metric_publish_frequency_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricPublishFrequencyInSeconds"></a>

```python
metric_publish_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_endpoint_path`<sup>Required</sup> <a name="metrics_endpoint_path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.metricsEndpointPath"></a>

```python
metrics_endpoint_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoints">metrics_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_endpoints`<sup>Required</sup> <a name="metrics_endpoints" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoints"></a>

```python
metrics_endpoints: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl">artifact_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig">container_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainer">DataAwsccSagemakerInferenceComponentSpecificationsContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_url`<sup>Required</sup> <a name="artifact_url" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl"></a>

```python
artifact_url: str
```

- *Type:* str

---

##### `container_metrics_config`<sup>Required</sup> <a name="container_metrics_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig"></a>

```python
container_metrics_config: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment"></a>

```python
environment: StringMap
```

- *Type:* cdktn.StringMap

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainer">DataAwsccSagemakerInferenceComponentSpecificationsContainer</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching">enable_caching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_caching`<sup>Required</sup> <a name="enable_caching" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching"></a>

```python
enable_caching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig">DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsList <a name="DataAwsccSagemakerInferenceComponentSpecificationsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentSpecificationsOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements">compute_resource_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.currentDataCacheConfig">current_data_cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters">startup_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecifications">DataAwsccSagemakerInferenceComponentSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_resource_requirements`<sup>Required</sup> <a name="compute_resource_requirements" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements"></a>

```python
compute_resource_requirements: DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.container"></a>

```python
container: DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference</a>

---

##### `current_data_cache_config`<sup>Required</sup> <a name="current_data_cache_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.currentDataCacheConfig"></a>

```python
current_data_cache_config: DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig"></a>

```python
scheduling_config: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference</a>

---

##### `startup_parameters`<sup>Required</sup> <a name="startup_parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters"></a>

```python
startup_parameters: DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecifications">DataAwsccSagemakerInferenceComponentSpecifications</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">max_imbalance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `max_imbalance`<sup>Required</sup> <a name="max_imbalance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```python
max_imbalance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance">availability_zone_balance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy">placement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_balance`<sup>Required</sup> <a name="availability_zone_balance" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```python
availability_zone_balance: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference</a>

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy"></a>

```python
placement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig">DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters">DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters">DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters</a>

---


### DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">container_startup_health_check_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">model_data_download_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParameters">DataAwsccSagemakerInferenceComponentSpecificationStartupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_startup_health_check_timeout_in_seconds`<sup>Required</sup> <a name="container_startup_health_check_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```python
container_startup_health_check_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_data_download_timeout_in_seconds`<sup>Required</sup> <a name="model_data_download_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```python
model_data_download_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentSpecificationStartupParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentSpecificationStartupParameters">DataAwsccSagemakerInferenceComponentSpecificationStartupParameters</a>

---


### DataAwsccSagemakerInferenceComponentTagsList <a name="DataAwsccSagemakerInferenceComponentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerInferenceComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerInferenceComponentTagsOutputReference <a name="DataAwsccSagemakerInferenceComponentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_inference_component

dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTags">DataAwsccSagemakerInferenceComponentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerInferenceComponentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceComponent.DataAwsccSagemakerInferenceComponentTags">DataAwsccSagemakerInferenceComponentTags</a>

---



