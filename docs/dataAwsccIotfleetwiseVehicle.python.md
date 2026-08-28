# `dataAwsccIotfleetwiseVehicle` Submodule <a name="`dataAwsccIotfleetwiseVehicle` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseVehicle <a name="DataAwsccIotfleetwiseVehicle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#id DataAwsccIotfleetwiseVehicle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotfleetwiseVehicle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotfleetwiseVehicle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseVehicle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior">association_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn">decoder_manifest_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn">model_manifest_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates">state_templates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_behavior`<sup>Required</sup> <a name="association_behavior" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior"></a>

```python
association_behavior: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `decoder_manifest_arn`<sup>Required</sup> <a name="decoder_manifest_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn"></a>

```python
decoder_manifest_arn: str
```

- *Type:* str

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `model_manifest_arn`<sup>Required</sup> <a name="model_manifest_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn"></a>

```python
model_manifest_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state_templates`<sup>Required</sup> <a name="state_templates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates"></a>

```python
state_templates: DataAwsccIotfleetwiseVehicleStateTemplatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags"></a>

```python
tags: DataAwsccIotfleetwiseVehicleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseVehicleConfig <a name="DataAwsccIotfleetwiseVehicleConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#id DataAwsccIotfleetwiseVehicle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseVehicleStateTemplates <a name="DataAwsccIotfleetwiseVehicleStateTemplates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates()
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy()
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic()
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate()
```


### DataAwsccIotfleetwiseVehicleTags <a name="DataAwsccIotfleetwiseVehicleTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseVehicleStateTemplatesList <a name="DataAwsccIotfleetwiseVehicleStateTemplatesList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy">state_template_update_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `state_template_update_strategy`<sup>Required</sup> <a name="state_template_update_strategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy"></a>

```python
state_template_update_strategy: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseVehicleStateTemplates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange">on_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic">periodic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_change`<sup>Required</sup> <a name="on_change" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange"></a>

```python
on_change: str
```

- *Type:* str

---

##### `periodic`<sup>Required</sup> <a name="periodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic"></a>

```python
periodic: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate">state_template_update_rate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_template_update_rate`<sup>Required</sup> <a name="state_template_update_rate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate"></a>

```python
state_template_update_rate: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---


### DataAwsccIotfleetwiseVehicleTagsList <a name="DataAwsccIotfleetwiseVehicleTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseVehicleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseVehicleTagsOutputReference <a name="DataAwsccIotfleetwiseVehicleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_vehicle

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseVehicleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a>

---



