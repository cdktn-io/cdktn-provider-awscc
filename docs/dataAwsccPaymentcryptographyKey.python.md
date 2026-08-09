# `dataAwsccPaymentcryptographyKey` Submodule <a name="`dataAwsccPaymentcryptographyKey` Submodule" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPaymentcryptographyKey <a name="DataAwsccPaymentcryptographyKey" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/paymentcryptography_key awscc_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/paymentcryptography_key#id DataAwsccPaymentcryptographyKey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPaymentcryptographyKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPaymentcryptographyKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPaymentcryptographyKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.deriveKeyUsage">derive_key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.exportable">exportable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyAttributes">key_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyCheckValueAlgorithm">key_check_value_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyIdentifier">key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyOrigin">key_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationRegions">replication_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationStatus">replication_status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap">DataAwsccPaymentcryptographyKeyReplicationStatusMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList">DataAwsccPaymentcryptographyKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `derive_key_usage`<sup>Required</sup> <a name="derive_key_usage" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.deriveKeyUsage"></a>

```python
derive_key_usage: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.exportable"></a>

```python
exportable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_attributes`<sup>Required</sup> <a name="key_attributes" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyAttributes"></a>

```python
key_attributes: DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `key_check_value_algorithm`<sup>Required</sup> <a name="key_check_value_algorithm" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```python
key_check_value_algorithm: str
```

- *Type:* str

---

##### `key_identifier`<sup>Required</sup> <a name="key_identifier" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyIdentifier"></a>

```python
key_identifier: str
```

- *Type:* str

---

##### `key_origin`<sup>Required</sup> <a name="key_origin" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyOrigin"></a>

```python
key_origin: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `replication_regions`<sup>Required</sup> <a name="replication_regions" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationRegions"></a>

```python
replication_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_status`<sup>Required</sup> <a name="replication_status" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationStatus"></a>

```python
replication_status: DataAwsccPaymentcryptographyKeyReplicationStatusMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap">DataAwsccPaymentcryptographyKeyReplicationStatusMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tags"></a>

```python
tags: DataAwsccPaymentcryptographyKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList">DataAwsccPaymentcryptographyKeyTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPaymentcryptographyKeyConfig <a name="DataAwsccPaymentcryptographyKeyConfig" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/paymentcryptography_key#id DataAwsccPaymentcryptographyKey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPaymentcryptographyKeyKeyAttributes <a name="DataAwsccPaymentcryptographyKeyKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes()
```


### DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse()
```


### DataAwsccPaymentcryptographyKeyReplicationStatus <a name="DataAwsccPaymentcryptographyKeyReplicationStatus" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus()
```


### DataAwsccPaymentcryptographyKeyTags <a name="DataAwsccPaymentcryptographyKeyTags" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">decrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">derive_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">encrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">generate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">no_restrictions</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">unwrap</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">verify</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">wrap</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```python
decrypt: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `derive_key`<sup>Required</sup> <a name="derive_key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```python
derive_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```python
encrypt: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `generate`<sup>Required</sup> <a name="generate" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```python
generate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `no_restrictions`<sup>Required</sup> <a name="no_restrictions" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```python
no_restrictions: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```python
sign: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `unwrap`<sup>Required</sup> <a name="unwrap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```python
unwrap: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```python
verify: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `wrap`<sup>Required</sup> <a name="wrap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```python
wrap: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---


### DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference <a name="DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">key_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">key_modes_of_use</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes">DataAwsccPaymentcryptographyKeyKeyAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `key_class`<sup>Required</sup> <a name="key_class" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```python
key_class: str
```

- *Type:* str

---

##### `key_modes_of_use`<sup>Required</sup> <a name="key_modes_of_use" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```python
key_modes_of_use: DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPaymentcryptographyKeyKeyAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes">DataAwsccPaymentcryptographyKeyKeyAttributes</a>

---


### DataAwsccPaymentcryptographyKeyReplicationStatusMap <a name="DataAwsccPaymentcryptographyKeyReplicationStatusMap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference <a name="DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus">DataAwsccPaymentcryptographyKeyReplicationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPaymentcryptographyKeyReplicationStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus">DataAwsccPaymentcryptographyKeyReplicationStatus</a>

---


### DataAwsccPaymentcryptographyKeyTagsList <a name="DataAwsccPaymentcryptographyKeyTagsList" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPaymentcryptographyKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPaymentcryptographyKeyTagsOutputReference <a name="DataAwsccPaymentcryptographyKeyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_paymentcryptography_key

dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags">DataAwsccPaymentcryptographyKeyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPaymentcryptographyKeyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags">DataAwsccPaymentcryptographyKeyTags</a>

---



