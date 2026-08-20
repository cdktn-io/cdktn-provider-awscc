# `dataAwsccEc2NetworkInterfaceAttachment` Submodule <a name="`dataAwsccEc2NetworkInterfaceAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInterfaceAttachment <a name="DataAwsccEc2NetworkInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_interface_attachment#id DataAwsccEc2NetworkInterfaceAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2NetworkInterfaceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2NetworkInterfaceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInterfaceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deviceIndex">device_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaQueueCount">ena_queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deviceIndex"></a>

```python
device_index: str
```

- *Type:* str

---

##### `ena_queue_count`<sup>Required</sup> <a name="ena_queue_count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaQueueCount"></a>

```python
ena_queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ena_srd_specification`<sup>Required</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaSrdSpecification"></a>

```python
ena_srd_specification: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a>

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInterfaceAttachmentConfig <a name="DataAwsccEc2NetworkInterfaceAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_interface_attachment#id DataAwsccEc2NetworkInterfaceAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification()
```


### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_enabled`<sup>Required</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_interface_attachment

dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_enabled`<sup>Required</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ena_srd_udp_specification`<sup>Required</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---



