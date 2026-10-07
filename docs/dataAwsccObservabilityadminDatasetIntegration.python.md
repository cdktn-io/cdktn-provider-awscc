# `dataAwsccObservabilityadminDatasetIntegration` Submodule <a name="`dataAwsccObservabilityadminDatasetIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccObservabilityadminDatasetIntegration <a name="DataAwsccObservabilityadminDatasetIntegration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/observabilityadmin_dataset_integration awscc_observabilityadmin_dataset_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/observabilityadmin_dataset_integration#id DataAwsccObservabilityadminDatasetIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccObservabilityadminDatasetIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccObservabilityadminDatasetIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/observabilityadmin_dataset_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccObservabilityadminDatasetIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList">DataAwsccObservabilityadminDatasetIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.tags"></a>

```python
tags: DataAwsccObservabilityadminDatasetIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList">DataAwsccObservabilityadminDatasetIntegrationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccObservabilityadminDatasetIntegrationConfig <a name="DataAwsccObservabilityadminDatasetIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/observabilityadmin_dataset_integration#id DataAwsccObservabilityadminDatasetIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccObservabilityadminDatasetIntegrationTags <a name="DataAwsccObservabilityadminDatasetIntegrationTags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccObservabilityadminDatasetIntegrationTagsList <a name="DataAwsccObservabilityadminDatasetIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference <a name="DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_observabilityadmin_dataset_integration

dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTags">DataAwsccObservabilityadminDatasetIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccObservabilityadminDatasetIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminDatasetIntegration.DataAwsccObservabilityadminDatasetIntegrationTags">DataAwsccObservabilityadminDatasetIntegrationTags</a>

---



