# `dataAwsccIotwirelessWirelessGateway` Submodule <a name="`dataAwsccIotwirelessWirelessGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessWirelessGateway <a name="DataAwsccIotwirelessWirelessGateway" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_gateway awscc_iotwireless_wireless_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_gateway#id DataAwsccIotwirelessWirelessGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotwirelessWirelessGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotwirelessWirelessGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessWirelessGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.lastUplinkReceivedAt">last_uplink_received_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference">DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList">DataAwsccIotwirelessWirelessGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.thingArn">thing_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.wirelessGatewayId">wireless_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_uplink_received_at`<sup>Required</sup> <a name="last_uplink_received_at" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.lastUplinkReceivedAt"></a>

```python
last_uplink_received_at: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.loRaWan"></a>

```python
lo_ra_wan: DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference">DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.tags"></a>

```python
tags: DataAwsccIotwirelessWirelessGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList">DataAwsccIotwirelessWirelessGatewayTagsList</a>

---

##### `thing_arn`<sup>Required</sup> <a name="thing_arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.thingArn"></a>

```python
thing_arn: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `wireless_gateway_id`<sup>Required</sup> <a name="wireless_gateway_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.wirelessGatewayId"></a>

```python
wireless_gateway_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessWirelessGatewayConfig <a name="DataAwsccIotwirelessWirelessGatewayConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_gateway#id DataAwsccIotwirelessWirelessGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessWirelessGatewayLoRaWan <a name="DataAwsccIotwirelessWirelessGatewayLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWan()
```


### DataAwsccIotwirelessWirelessGatewayTags <a name="DataAwsccIotwirelessWirelessGatewayTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference <a name="DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui">gateway_eui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion">rf_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWan">DataAwsccIotwirelessWirelessGatewayLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_eui`<sup>Required</sup> <a name="gateway_eui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui"></a>

```python
gateway_eui: str
```

- *Type:* str

---

##### `rf_region`<sup>Required</sup> <a name="rf_region" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion"></a>

```python
rf_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessWirelessGatewayLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayLoRaWan">DataAwsccIotwirelessWirelessGatewayLoRaWan</a>

---


### DataAwsccIotwirelessWirelessGatewayTagsList <a name="DataAwsccIotwirelessWirelessGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotwirelessWirelessGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotwirelessWirelessGatewayTagsOutputReference <a name="DataAwsccIotwirelessWirelessGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_gateway

dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTags">DataAwsccIotwirelessWirelessGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessWirelessGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessGateway.DataAwsccIotwirelessWirelessGatewayTags">DataAwsccIotwirelessWirelessGatewayTags</a>

---



