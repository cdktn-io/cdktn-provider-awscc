# `dataAwsccInvoicingInvoiceUnit` Submodule <a name="`dataAwsccInvoicingInvoiceUnit` Submodule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInvoicingInvoiceUnit <a name="DataAwsccInvoicingInvoiceUnit" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit awscc_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit#id DataAwsccInvoicingInvoiceUnit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccInvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccInvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccInvoicingInvoiceUnit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccInvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceReceiver">invoice_receiver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceUnitArn">invoice_unit_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lastModified">last_modified</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList">DataAwsccInvoicingInvoiceUnitResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference">DataAwsccInvoicingInvoiceUnitRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.taxInheritanceDisabled">tax_inheritance_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `invoice_receiver`<sup>Required</sup> <a name="invoice_receiver" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceReceiver"></a>

```python
invoice_receiver: str
```

- *Type:* str

---

##### `invoice_unit_arn`<sup>Required</sup> <a name="invoice_unit_arn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceUnitArn"></a>

```python
invoice_unit_arn: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lastModified"></a>

```python
last_modified: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.resourceTags"></a>

```python
resource_tags: DataAwsccInvoicingInvoiceUnitResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList">DataAwsccInvoicingInvoiceUnitResourceTagsList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.rule"></a>

```python
rule: DataAwsccInvoicingInvoiceUnitRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference">DataAwsccInvoicingInvoiceUnitRuleOutputReference</a>

---

##### `tax_inheritance_disabled`<sup>Required</sup> <a name="tax_inheritance_disabled" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```python
tax_inheritance_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInvoicingInvoiceUnitConfig <a name="DataAwsccInvoicingInvoiceUnitConfig" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit#id DataAwsccInvoicingInvoiceUnit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInvoicingInvoiceUnitResourceTags <a name="DataAwsccInvoicingInvoiceUnitResourceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags()
```


### DataAwsccInvoicingInvoiceUnitRule <a name="DataAwsccInvoicingInvoiceUnitRule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInvoicingInvoiceUnitResourceTagsList <a name="DataAwsccInvoicingInvoiceUnitResourceTagsList" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference <a name="DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags">DataAwsccInvoicingInvoiceUnitResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingInvoiceUnitResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags">DataAwsccInvoicingInvoiceUnitResourceTags</a>

---


### DataAwsccInvoicingInvoiceUnitRuleOutputReference <a name="DataAwsccInvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_invoice_unit

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">linked_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule">DataAwsccInvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_accounts`<sup>Required</sup> <a name="linked_accounts" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```python
linked_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingInvoiceUnitRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule">DataAwsccInvoicingInvoiceUnitRule</a>

---



