# `dataAwsccMediaconnectRouterNetworkInterface` Submodule <a name="`dataAwsccMediaconnectRouterNetworkInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterNetworkInterface <a name="DataAwsccMediaconnectRouterNetworkInterface" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface#id DataAwsccMediaconnectRouterNetworkInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectRouterNetworkInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectRouterNetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterNetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedInputCount">associated_input_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedOutputCount">associated_output_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.networkInterfaceType">network_interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId">router_network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList">DataAwsccMediaconnectRouterNetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_input_count`<sup>Required</sup> <a name="associated_input_count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedInputCount"></a>

```python
associated_input_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `associated_output_count`<sup>Required</sup> <a name="associated_output_count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.associatedOutputCount"></a>

```python
associated_output_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.configuration"></a>

```python
configuration: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_interface_type`<sup>Required</sup> <a name="network_interface_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.networkInterfaceType"></a>

```python
network_interface_type: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `router_network_interface_id`<sup>Required</sup> <a name="router_network_interface_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId"></a>

```python
router_network_interface_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tags"></a>

```python
tags: DataAwsccMediaconnectRouterNetworkInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList">DataAwsccMediaconnectRouterNetworkInterfaceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterNetworkInterfaceConfig <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_router_network_interface#id DataAwsccMediaconnectRouterNetworkInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterNetworkInterfaceConfiguration <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration()
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic()
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules()
```


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc()
```


### DataAwsccMediaconnectRouterNetworkInterfaceTags <a name="DataAwsccMediaconnectRouterNetworkInterfaceTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration">DataAwsccMediaconnectRouterNetworkInterfaceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public"></a>

```python
public: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc"></a>

```python
vpc: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterNetworkInterfaceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfiguration">DataAwsccMediaconnectRouterNetworkInterfaceConfiguration</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules">allow_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_rules`<sup>Required</sup> <a name="allow_rules" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules"></a>

```python
allow_rules: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationPublic</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc">DataAwsccMediaconnectRouterNetworkInterfaceConfigurationVpc</a>

---


### DataAwsccMediaconnectRouterNetworkInterfaceTagsList <a name="DataAwsccMediaconnectRouterNetworkInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference <a name="DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_network_interface

dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags">DataAwsccMediaconnectRouterNetworkInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterNetworkInterfaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterNetworkInterface.DataAwsccMediaconnectRouterNetworkInterfaceTags">DataAwsccMediaconnectRouterNetworkInterfaceTags</a>

---



