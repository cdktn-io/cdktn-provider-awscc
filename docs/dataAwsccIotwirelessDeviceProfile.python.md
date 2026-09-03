# `dataAwsccIotwirelessDeviceProfile` Submodule <a name="`dataAwsccIotwirelessDeviceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessDeviceProfile <a name="DataAwsccIotwirelessDeviceProfile" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_device_profile awscc_iotwireless_device_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_device_profile#id DataAwsccIotwirelessDeviceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotwirelessDeviceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotwirelessDeviceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessDeviceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.deviceProfileId">device_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference">DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList">DataAwsccIotwirelessDeviceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `device_profile_id`<sup>Required</sup> <a name="device_profile_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.deviceProfileId"></a>

```python
device_profile_id: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.loRaWan"></a>

```python
lo_ra_wan: DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference">DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.tags"></a>

```python
tags: DataAwsccIotwirelessDeviceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList">DataAwsccIotwirelessDeviceProfileTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessDeviceProfileConfig <a name="DataAwsccIotwirelessDeviceProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_device_profile#id DataAwsccIotwirelessDeviceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessDeviceProfileLoRaWan <a name="DataAwsccIotwirelessDeviceProfileLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWan()
```


### DataAwsccIotwirelessDeviceProfileTags <a name="DataAwsccIotwirelessDeviceProfileTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference <a name="DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout">class_b_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout">class_c_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList">factory_preset_freqs_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion">mac_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle">max_duty_cycle</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp">max_eirp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr">ping_slot_dr</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq">ping_slot_freq</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod">ping_slot_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision">reg_params_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion">rf_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2">rx_data_rate2</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1">rx_delay1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1">rx_dr_offset1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2">rx_freq2</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt">supports32_bit_f_cnt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB">supports_class_b</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC">supports_class_c</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin">supports_join</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWan">DataAwsccIotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `class_b_timeout`<sup>Required</sup> <a name="class_b_timeout" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout"></a>

```python
class_b_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `class_c_timeout`<sup>Required</sup> <a name="class_c_timeout" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout"></a>

```python
class_c_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `factory_preset_freqs_list`<sup>Required</sup> <a name="factory_preset_freqs_list" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList"></a>

```python
factory_preset_freqs_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `mac_version`<sup>Required</sup> <a name="mac_version" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion"></a>

```python
mac_version: str
```

- *Type:* str

---

##### `max_duty_cycle`<sup>Required</sup> <a name="max_duty_cycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle"></a>

```python
max_duty_cycle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_eirp`<sup>Required</sup> <a name="max_eirp" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp"></a>

```python
max_eirp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ping_slot_dr`<sup>Required</sup> <a name="ping_slot_dr" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr"></a>

```python
ping_slot_dr: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ping_slot_freq`<sup>Required</sup> <a name="ping_slot_freq" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq"></a>

```python
ping_slot_freq: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ping_slot_period`<sup>Required</sup> <a name="ping_slot_period" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod"></a>

```python
ping_slot_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reg_params_revision`<sup>Required</sup> <a name="reg_params_revision" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision"></a>

```python
reg_params_revision: str
```

- *Type:* str

---

##### `rf_region`<sup>Required</sup> <a name="rf_region" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion"></a>

```python
rf_region: str
```

- *Type:* str

---

##### `rx_data_rate2`<sup>Required</sup> <a name="rx_data_rate2" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2"></a>

```python
rx_data_rate2: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rx_delay1`<sup>Required</sup> <a name="rx_delay1" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1"></a>

```python
rx_delay1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rx_dr_offset1`<sup>Required</sup> <a name="rx_dr_offset1" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1"></a>

```python
rx_dr_offset1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rx_freq2`<sup>Required</sup> <a name="rx_freq2" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2"></a>

```python
rx_freq2: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supports32_bit_f_cnt`<sup>Required</sup> <a name="supports32_bit_f_cnt" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt"></a>

```python
supports32_bit_f_cnt: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_class_b`<sup>Required</sup> <a name="supports_class_b" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB"></a>

```python
supports_class_b: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_class_c`<sup>Required</sup> <a name="supports_class_c" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC"></a>

```python
supports_class_c: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_join`<sup>Required</sup> <a name="supports_join" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin"></a>

```python
supports_join: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessDeviceProfileLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileLoRaWan">DataAwsccIotwirelessDeviceProfileLoRaWan</a>

---


### DataAwsccIotwirelessDeviceProfileTagsList <a name="DataAwsccIotwirelessDeviceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotwirelessDeviceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotwirelessDeviceProfileTagsOutputReference <a name="DataAwsccIotwirelessDeviceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_device_profile

dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTags">DataAwsccIotwirelessDeviceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessDeviceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessDeviceProfile.DataAwsccIotwirelessDeviceProfileTags">DataAwsccIotwirelessDeviceProfileTags</a>

---



