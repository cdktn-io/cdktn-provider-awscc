# `dataAwsccDirectconnectPublicVirtualInterface` Submodule <a name="`dataAwsccDirectconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectPublicVirtualInterface <a name="DataAwsccDirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_public_virtual_interface#id DataAwsccDirectconnectPublicVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDirectconnectPublicVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">allocate_public_virtual_interface_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.bgpPeers">bgp_peers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList">DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.rateLimit">rate_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList">DataAwsccDirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceArn">virtual_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allocate_public_virtual_interface_role_arn`<sup>Required</sup> <a name="allocate_public_virtual_interface_role_arn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```python
allocate_public_virtual_interface_role_arn: str
```

- *Type:* str

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```python
bgp_peers: DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList">DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

---

##### `route_filter_prefixes`<sup>Required</sup> <a name="route_filter_prefixes" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```python
route_filter_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.tags"></a>

```python
tags: DataAwsccDirectconnectPublicVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList">DataAwsccDirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `virtual_interface_arn`<sup>Required</sup> <a name="virtual_interface_arn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```python
virtual_interface_arn: str
```

- *Type:* str

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers <a name="DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers()
```


### DataAwsccDirectconnectPublicVirtualInterfaceConfig <a name="DataAwsccDirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_public_virtual_interface#id DataAwsccDirectconnectPublicVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectPublicVirtualInterfaceTags <a name="DataAwsccDirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList <a name="DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers">DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```python
asn: str
```

- *Type:* str

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

---

##### `bgp_peer_id`<sup>Required</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers">DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers</a>

---


### DataAwsccDirectconnectPublicVirtualInterfaceTagsList <a name="DataAwsccDirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_public_virtual_interface

dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTags">DataAwsccDirectconnectPublicVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectconnectPublicVirtualInterfaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPublicVirtualInterface.DataAwsccDirectconnectPublicVirtualInterfaceTags">DataAwsccDirectconnectPublicVirtualInterfaceTags</a>

---



