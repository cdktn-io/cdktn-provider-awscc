# `dataAwsccEc2LocalGatewayVirtualInterface` Submodule <a name="`dataAwsccEc2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayVirtualInterface <a name="DataAwsccEc2LocalGatewayVirtualInterface" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsccEc2LocalGatewayVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2LocalGatewayVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.configurationState">configuration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localAddress">local_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localBgpAsn">local_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId">local_gateway_virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.outpostLagId">outpost_lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerBgpAsn">peer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerBgpAsnExtended">peer_bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList">DataAwsccEc2LocalGatewayVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration_state`<sup>Required</sup> <a name="configuration_state" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.configurationState"></a>

```python
configuration_state: str
```

- *Type:* str

---

##### `local_address`<sup>Required</sup> <a name="local_address" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localAddress"></a>

```python
local_address: str
```

- *Type:* str

---

##### `local_bgp_asn`<sup>Required</sup> <a name="local_bgp_asn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```python
local_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId"></a>

```python
local_gateway_virtual_interface_id: str
```

- *Type:* str

---

##### `outpost_lag_id`<sup>Required</sup> <a name="outpost_lag_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```python
outpost_lag_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `peer_bgp_asn`<sup>Required</sup> <a name="peer_bgp_asn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```python
peer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_bgp_asn_extended`<sup>Required</sup> <a name="peer_bgp_asn_extended" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.peerBgpAsnExtended"></a>

```python
peer_bgp_asn_extended: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.tags"></a>

```python
tags: DataAwsccEc2LocalGatewayVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList">DataAwsccEc2LocalGatewayVirtualInterfaceTagsList</a>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayVirtualInterfaceConfig <a name="DataAwsccEc2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsccEc2LocalGatewayVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayVirtualInterfaceTags <a name="DataAwsccEc2LocalGatewayVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayVirtualInterfaceTagsList <a name="DataAwsccEc2LocalGatewayVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference <a name="DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_virtual_interface

dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTags">DataAwsccEc2LocalGatewayVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LocalGatewayVirtualInterfaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterface.DataAwsccEc2LocalGatewayVirtualInterfaceTags">DataAwsccEc2LocalGatewayVirtualInterfaceTags</a>

---



