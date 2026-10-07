# `dataAwsccSmsvoiceRcsAgent` Submodule <a name="`dataAwsccSmsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceRcsAgent <a name="DataAwsccSmsvoiceRcsAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#id DataAwsccSmsvoiceRcsAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSmsvoiceRcsAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn">rcs_agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId">rcs_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent">testing_agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled">two_way_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName">two_way_media_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">two_way_media_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role">two_way_media_s3_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">two_way_rcs_events_enabled</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `rcs_agent_arn`<sup>Required</sup> <a name="rcs_agent_arn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn"></a>

```python
rcs_agent_arn: str
```

- *Type:* str

---

##### `rcs_agent_id`<sup>Required</sup> <a name="rcs_agent_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId"></a>

```python
rcs_agent_id: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags"></a>

```python
tags: DataAwsccSmsvoiceRcsAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a>

---

##### `testing_agent`<sup>Required</sup> <a name="testing_agent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent"></a>

```python
testing_agent: DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `two_way_channel_arn`<sup>Required</sup> <a name="two_way_channel_arn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

---

##### `two_way_channel_role`<sup>Required</sup> <a name="two_way_channel_role" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

---

##### `two_way_enabled`<sup>Required</sup> <a name="two_way_enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled"></a>

```python
two_way_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `two_way_media_s3_bucket_name`<sup>Required</sup> <a name="two_way_media_s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```python
two_way_media_s3_bucket_name: str
```

- *Type:* str

---

##### `two_way_media_s3_key_prefix`<sup>Required</sup> <a name="two_way_media_s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```python
two_way_media_s3_key_prefix: str
```

- *Type:* str

---

##### `two_way_media_s3_role`<sup>Required</sup> <a name="two_way_media_s3_role" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```python
two_way_media_s3_role: str
```

- *Type:* str

---

##### `two_way_rcs_events_enabled`<sup>Required</sup> <a name="two_way_rcs_events_enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```python
two_way_rcs_events_enabled: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceRcsAgentConfig <a name="DataAwsccSmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#id DataAwsccSmsvoiceRcsAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceRcsAgentTags <a name="DataAwsccSmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags()
```


### DataAwsccSmsvoiceRcsAgentTestingAgent <a name="DataAwsccSmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceRcsAgentTagsList <a name="DataAwsccSmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSmsvoiceRcsAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSmsvoiceRcsAgentTagsOutputReference <a name="DataAwsccSmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceRcsAgentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a>

---


### DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference <a name="DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_smsvoice_rcs_agent

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">registration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">testing_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">testing_agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registration_id`<sup>Required</sup> <a name="registration_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```python
registration_id: str
```

- *Type:* str

---

##### `testing_agent_id`<sup>Required</sup> <a name="testing_agent_id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```python
testing_agent_id: str
```

- *Type:* str

---

##### `testing_agent_status`<sup>Required</sup> <a name="testing_agent_status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```python
testing_agent_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSmsvoiceRcsAgentTestingAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a>

---



