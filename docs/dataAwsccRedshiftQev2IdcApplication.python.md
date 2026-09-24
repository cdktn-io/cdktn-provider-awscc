# `dataAwsccRedshiftQev2IdcApplication` Submodule <a name="`dataAwsccRedshiftQev2IdcApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftQev2IdcApplication <a name="DataAwsccRedshiftQev2IdcApplication" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application awscc_redshift_qev2_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application#id DataAwsccRedshiftQev2IdcApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRedshiftQev2IdcApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRedshiftQev2IdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftQev2IdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcDisplayName">idc_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcManagedApplicationArn">idc_managed_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcOnboardStatus">idc_onboard_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationArn">qev2_idc_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationName">qev2_idc_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList">DataAwsccRedshiftQev2IdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `idc_display_name`<sup>Required</sup> <a name="idc_display_name" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcDisplayName"></a>

```python
idc_display_name: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `idc_managed_application_arn`<sup>Required</sup> <a name="idc_managed_application_arn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcManagedApplicationArn"></a>

```python
idc_managed_application_arn: str
```

- *Type:* str

---

##### `idc_onboard_status`<sup>Required</sup> <a name="idc_onboard_status" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcOnboardStatus"></a>

```python
idc_onboard_status: str
```

- *Type:* str

---

##### `qev2_idc_application_arn`<sup>Required</sup> <a name="qev2_idc_application_arn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationArn"></a>

```python
qev2_idc_application_arn: str
```

- *Type:* str

---

##### `qev2_idc_application_name`<sup>Required</sup> <a name="qev2_idc_application_name" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationName"></a>

```python
qev2_idc_application_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tags"></a>

```python
tags: DataAwsccRedshiftQev2IdcApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList">DataAwsccRedshiftQev2IdcApplicationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftQev2IdcApplicationConfig <a name="DataAwsccRedshiftQev2IdcApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application#id DataAwsccRedshiftQev2IdcApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftQev2IdcApplicationTags <a name="DataAwsccRedshiftQev2IdcApplicationTags" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftQev2IdcApplicationTagsList <a name="DataAwsccRedshiftQev2IdcApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRedshiftQev2IdcApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRedshiftQev2IdcApplicationTagsOutputReference <a name="DataAwsccRedshiftQev2IdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_qev2_idc_application

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags">DataAwsccRedshiftQev2IdcApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftQev2IdcApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags">DataAwsccRedshiftQev2IdcApplicationTags</a>

---



