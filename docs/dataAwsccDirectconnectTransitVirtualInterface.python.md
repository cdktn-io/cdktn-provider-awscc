# `dataAwsccDirectconnectTransitVirtualInterface` Submodule <a name="`dataAwsccDirectconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectTransitVirtualInterface <a name="DataAwsccDirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_transit_virtual_interface#id DataAwsccDirectconnectTransitVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDirectconnectTransitVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">allocate_transit_virtual_interface_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers">bgp_peers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink">enable_site_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.rateLimit">rate_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn">virtual_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allocate_transit_virtual_interface_role_arn`<sup>Required</sup> <a name="allocate_transit_virtual_interface_role_arn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```python
allocate_transit_virtual_interface_role_arn: str
```

- *Type:* str

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```python
bgp_peers: DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `direct_connect_gateway_id`<sup>Required</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```python
direct_connect_gateway_id: str
```

- *Type:* str

---

##### `enable_site_link`<sup>Required</sup> <a name="enable_site_link" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```python
enable_site_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags"></a>

```python
tags: DataAwsccDirectconnectTransitVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `virtual_interface_arn`<sup>Required</sup> <a name="virtual_interface_arn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```python
virtual_interface_arn: str
```

- *Type:* str

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers()
```


### DataAwsccDirectconnectTransitVirtualInterfaceConfig <a name="DataAwsccDirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_transit_virtual_interface#id DataAwsccDirectconnectTransitVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectTransitVirtualInterfaceTags <a name="DataAwsccDirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```python
asn: str
```

- *Type:* str

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

---

##### `bgp_peer_id`<sup>Required</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsList <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directconnect_transit_virtual_interface

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectconnectTransitVirtualInterfaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a>

---



