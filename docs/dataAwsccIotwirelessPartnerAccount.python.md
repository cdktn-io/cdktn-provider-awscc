# `dataAwsccIotwirelessPartnerAccount` Submodule <a name="`dataAwsccIotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessPartnerAccount <a name="DataAwsccIotwirelessPartnerAccount" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_partner_account#id DataAwsccIotwirelessPartnerAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotwirelessPartnerAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked">account_linked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId">partner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType">partner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse">sidewalk_response</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate">sidewalk_update</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_linked`<sup>Required</sup> <a name="account_linked" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked"></a>

```python
account_linked: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `partner_account_id`<sup>Required</sup> <a name="partner_account_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId"></a>

```python
partner_account_id: str
```

- *Type:* str

---

##### `partner_type`<sup>Required</sup> <a name="partner_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType"></a>

```python
partner_type: str
```

- *Type:* str

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk"></a>

```python
sidewalk: DataAwsccIotwirelessPartnerAccountSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `sidewalk_response`<sup>Required</sup> <a name="sidewalk_response" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse"></a>

```python
sidewalk_response: DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `sidewalk_update`<sup>Required</sup> <a name="sidewalk_update" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```python
sidewalk_update: DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags"></a>

```python
tags: DataAwsccIotwirelessPartnerAccountTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessPartnerAccountConfig <a name="DataAwsccIotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_partner_account#id DataAwsccIotwirelessPartnerAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessPartnerAccountSidewalk <a name="DataAwsccIotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk()
```


### DataAwsccIotwirelessPartnerAccountSidewalkResponse <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse()
```


### DataAwsccIotwirelessPartnerAccountSidewalkUpdate <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate()
```


### DataAwsccIotwirelessPartnerAccountTags <a name="DataAwsccIotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessPartnerAccountSidewalkOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_server_private_key`<sup>Required</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessPartnerAccountSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">amazon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_id`<sup>Required</sup> <a name="amazon_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```python
amazon_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessPartnerAccountSidewalkResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_server_private_key`<sup>Required</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessPartnerAccountSidewalkUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a>

---


### DataAwsccIotwirelessPartnerAccountTagsList <a name="DataAwsccIotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotwirelessPartnerAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotwirelessPartnerAccountTagsOutputReference <a name="DataAwsccIotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_partner_account

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessPartnerAccountTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a>

---



