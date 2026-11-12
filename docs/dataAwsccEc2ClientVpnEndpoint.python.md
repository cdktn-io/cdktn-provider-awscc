# `dataAwsccEc2ClientVpnEndpoint` Submodule <a name="`dataAwsccEc2ClientVpnEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2ClientVpnEndpoint <a name="DataAwsccEc2ClientVpnEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint#id DataAwsccEc2ClientVpnEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2ClientVpnEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2ClientVpnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2ClientVpnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.authenticationOptions">authentication_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.authorizationPolicy">authorization_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference">DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientCidrBlock">client_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientConnectOptions">client_connect_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientLoginBannerOptions">client_login_banner_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientRouteEnforcementOptions">client_route_enforcement_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.connectionLogOptions">connection_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference">DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.devicePostureOptions">device_posture_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.disconnectOnSessionTimeout">disconnect_on_session_timeout</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.endpointIpAddressType">endpoint_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.selfServicePortal">self_service_portal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.serverCertificateArn">server_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.sessionTimeoutHours">session_timeout_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.splitTunnel">split_tunnel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList">DataAwsccEc2ClientVpnEndpointTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.trafficIpAddressType">traffic_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference">DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.vpnPort">vpn_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `authentication_options`<sup>Required</sup> <a name="authentication_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.authenticationOptions"></a>

```python
authentication_options: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `authorization_policy`<sup>Required</sup> <a name="authorization_policy" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.authorizationPolicy"></a>

```python
authorization_policy: DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference">DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference</a>

---

##### `client_cidr_block`<sup>Required</sup> <a name="client_cidr_block" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientCidrBlock"></a>

```python
client_cidr_block: str
```

- *Type:* str

---

##### `client_connect_options`<sup>Required</sup> <a name="client_connect_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientConnectOptions"></a>

```python
client_connect_options: DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `client_login_banner_options`<sup>Required</sup> <a name="client_login_banner_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```python
client_login_banner_options: DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `client_route_enforcement_options`<sup>Required</sup> <a name="client_route_enforcement_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientRouteEnforcementOptions"></a>

```python
client_route_enforcement_options: DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a>

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

---

##### `connection_log_options`<sup>Required</sup> <a name="connection_log_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.connectionLogOptions"></a>

```python
connection_log_options: DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference">DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_posture_options`<sup>Required</sup> <a name="device_posture_options" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.devicePostureOptions"></a>

```python
device_posture_options: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference</a>

---

##### `disconnect_on_session_timeout`<sup>Required</sup> <a name="disconnect_on_session_timeout" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.disconnectOnSessionTimeout"></a>

```python
disconnect_on_session_timeout: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `endpoint_ip_address_type`<sup>Required</sup> <a name="endpoint_ip_address_type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.endpointIpAddressType"></a>

```python
endpoint_ip_address_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_service_portal`<sup>Required</sup> <a name="self_service_portal" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.selfServicePortal"></a>

```python
self_service_portal: str
```

- *Type:* str

---

##### `server_certificate_arn`<sup>Required</sup> <a name="server_certificate_arn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.serverCertificateArn"></a>

```python
server_certificate_arn: str
```

- *Type:* str

---

##### `session_timeout_hours`<sup>Required</sup> <a name="session_timeout_hours" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```python
session_timeout_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `split_tunnel`<sup>Required</sup> <a name="split_tunnel" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.splitTunnel"></a>

```python
split_tunnel: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.tagSpecifications"></a>

```python
tag_specifications: DataAwsccEc2ClientVpnEndpointTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList">DataAwsccEc2ClientVpnEndpointTagSpecificationsList</a>

---

##### `traffic_ip_address_type`<sup>Required</sup> <a name="traffic_ip_address_type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.trafficIpAddressType"></a>

```python
traffic_ip_address_type: str
```

- *Type:* str

---

##### `transit_gateway_configuration`<sup>Required</sup> <a name="transit_gateway_configuration" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.transitGatewayConfiguration"></a>

```python
transit_gateway_configuration: DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference">DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a>

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpn_port`<sup>Required</sup> <a name="vpn_port" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.vpnPort"></a>

```python
vpn_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2ClientVpnEndpointAuthenticationOptions <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptions()
```


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory()
```


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication()
```


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication()
```


### DataAwsccEc2ClientVpnEndpointAuthorizationPolicy <a name="DataAwsccEc2ClientVpnEndpointAuthorizationPolicy" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicy()
```


### DataAwsccEc2ClientVpnEndpointClientConnectOptions <a name="DataAwsccEc2ClientVpnEndpointClientConnectOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptions()
```


### DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions <a name="DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions()
```


### DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions <a name="DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions()
```


### DataAwsccEc2ClientVpnEndpointConfig <a name="DataAwsccEc2ClientVpnEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint#id DataAwsccEc2ClientVpnEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2ClientVpnEndpointConnectionLogOptions <a name="DataAwsccEc2ClientVpnEndpointConnectionLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptions()
```


### DataAwsccEc2ClientVpnEndpointDevicePostureOptions <a name="DataAwsccEc2ClientVpnEndpointDevicePostureOptions" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptions()
```


### DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders <a name="DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders()
```


### DataAwsccEc2ClientVpnEndpointTagSpecifications <a name="DataAwsccEc2ClientVpnEndpointTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecifications()
```


### DataAwsccEc2ClientVpnEndpointTagSpecificationsTags <a name="DataAwsccEc2ClientVpnEndpointTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTags()
```


### DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration <a name="DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn">saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn">self_service_saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `saml_provider_arn`<sup>Required</sup> <a name="saml_provider_arn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn"></a>

```python
saml_provider_arn: str
```

- *Type:* str

---

##### `self_service_saml_provider_arn`<sup>Required</sup> <a name="self_service_saml_provider_arn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn"></a>

```python
self_service_saml_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn">client_root_certificate_chain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_root_certificate_chain_arn`<sup>Required</sup> <a name="client_root_certificate_chain_arn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn"></a>

```python
client_root_certificate_chain_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---


### DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication">federated_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptions">DataAwsccEc2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory"></a>

```python
active_directory: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a>

---

##### `federated_authentication`<sup>Required</sup> <a name="federated_authentication" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication"></a>

```python
federated_authentication: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a>

---

##### `mutual_authentication`<sup>Required</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication"></a>

```python
mutual_authentication: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointAuthenticationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthenticationOptions">DataAwsccEc2ClientVpnEndpointAuthenticationOptions</a>

---


### DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference <a name="DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode">shadow_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicy">DataAwsccEc2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `shadow_mode`<sup>Required</sup> <a name="shadow_mode" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode"></a>

```python
shadow_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointAuthorizationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointAuthorizationPolicy">DataAwsccEc2ClientVpnEndpointAuthorizationPolicy</a>

---


### DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptions">DataAwsccEc2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientConnectOptions">DataAwsccEc2ClientVpnEndpointClientConnectOptions</a>

---


### DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">banner_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banner_text`<sup>Required</sup> <a name="banner_text" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```python
banner_text: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions</a>

---


### DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced">enforced</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions">DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced"></a>

```python
enforced: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions">DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions</a>

---


### DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatch_log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatch_log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext">include_authorization_policy_context</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptions">DataAwsccEc2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group`<sup>Required</sup> <a name="cloudwatch_log_group" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```python
cloudwatch_log_group: str
```

- *Type:* str

---

##### `cloudwatch_log_stream`<sup>Required</sup> <a name="cloudwatch_log_stream" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```python
cloudwatch_log_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_authorization_policy_context`<sup>Required</sup> <a name="include_authorization_policy_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext"></a>

```python
include_authorization_policy_context: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointConnectionLogOptions">DataAwsccEc2ClientVpnEndpointConnectionLogOptions</a>

---


### DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference <a name="DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders">trust_providers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptions">DataAwsccEc2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trust_providers`<sup>Required</sup> <a name="trust_providers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders"></a>

```python
trust_providers: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointDevicePostureOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptions">DataAwsccEc2ClientVpnEndpointDevicePostureOptions</a>

---


### DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList <a name="DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference <a name="DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_signing_key_url`<sup>Required</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders">DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>

---


### DataAwsccEc2ClientVpnEndpointTagSpecificationsList <a name="DataAwsccEc2ClientVpnEndpointTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference <a name="DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList">DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecifications">DataAwsccEc2ClientVpnEndpointTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.tags"></a>

```python
tags: DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList">DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecifications">DataAwsccEc2ClientVpnEndpointTagSpecifications</a>

---


### DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList <a name="DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference <a name="DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTags">DataAwsccEc2ClientVpnEndpointTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTagSpecificationsTags">DataAwsccEc2ClientVpnEndpointTagSpecificationsTags</a>

---


### DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference <a name="DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_client_vpn_endpoint

dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds">availability_zone_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration">DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_ids`<sup>Required</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds"></a>

```python
availability_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ClientVpnEndpoint.DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration">DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration</a>

---



