# `dataAwsccSmsvoiceProtectConfiguration` Submodule <a name="`dataAwsccSmsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceProtectConfiguration <a name="DataAwsccSmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_protect_configuration#id DataAwsccSmsvoiceProtectConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSmsvoiceProtectConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.countryRuleSet">country_rule_set</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.protectConfigurationId">protect_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList">DataAwsccSmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `country_rule_set`<sup>Required</sup> <a name="country_rule_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```python
country_rule_set: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `protect_configuration_id`<sup>Required</sup> <a name="protect_configuration_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```python
protect_configuration_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tags"></a>

```python
tags: DataAwsccSmsvoiceProtectConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList">DataAwsccSmsvoiceProtectConfigurationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceProtectConfigurationConfig <a name="DataAwsccSmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_protect_configuration#id DataAwsccSmsvoiceProtectConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceProtectConfigurationCountryRuleSet <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet()
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms()
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms()
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice()
```


### DataAwsccSmsvoiceProtectConfigurationTags <a name="DataAwsccSmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">protect_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">mms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">sms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet">DataAwsccSmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mms`<sup>Required</sup> <a name="mms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```python
mms: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `sms`<sup>Required</sup> <a name="sms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```python
sms: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```python
voice: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceProtectConfigurationCountryRuleSet
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet">DataAwsccSmsvoiceProtectConfigurationCountryRuleSet</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">protect_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">protect_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice</a>

---


### DataAwsccSmsvoiceProtectConfigurationTagsList <a name="DataAwsccSmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSmsvoiceProtectConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSmsvoiceProtectConfigurationTagsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_protect_configuration

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags">DataAwsccSmsvoiceProtectConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceProtectConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags">DataAwsccSmsvoiceProtectConfigurationTags</a>

---



