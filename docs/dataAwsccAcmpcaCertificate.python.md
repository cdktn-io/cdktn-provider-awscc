# `dataAwsccAcmpcaCertificate` Submodule <a name="`dataAwsccAcmpcaCertificate` Submodule" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAcmpcaCertificate <a name="DataAwsccAcmpcaCertificate" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/acmpca_certificate awscc_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/acmpca_certificate#id DataAwsccAcmpcaCertificate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAcmpcaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAcmpcaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAcmpcaCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAcmpcaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/acmpca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAcmpcaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.apiPassthrough">api_passthrough</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference">DataAwsccAcmpcaCertificateApiPassthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference">DataAwsccAcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.validityNotBefore">validity_not_before</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference">DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_passthrough`<sup>Required</sup> <a name="api_passthrough" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.apiPassthrough"></a>

```python
api_passthrough: DataAwsccAcmpcaCertificateApiPassthroughOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference">DataAwsccAcmpcaCertificateApiPassthroughOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.validity"></a>

```python
validity: DataAwsccAcmpcaCertificateValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference">DataAwsccAcmpcaCertificateValidityOutputReference</a>

---

##### `validity_not_before`<sup>Required</sup> <a name="validity_not_before" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.validityNotBefore"></a>

```python
validity_not_before: DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference">DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAcmpcaCertificateApiPassthrough <a name="DataAwsccAcmpcaCertificateApiPassthrough" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthrough"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthrough.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthrough()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensions <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensions()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName()
```


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName()
```


### DataAwsccAcmpcaCertificateApiPassthroughSubject <a name="DataAwsccAcmpcaCertificateApiPassthroughSubject" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubject()
```


### DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes <a name="DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes()
```


### DataAwsccAcmpcaCertificateConfig <a name="DataAwsccAcmpcaCertificateConfig" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/acmpca_certificate#id DataAwsccAcmpcaCertificate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAcmpcaCertificateValidity <a name="DataAwsccAcmpcaCertificateValidity" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidity()
```


### DataAwsccAcmpcaCertificateValidityNotBefore <a name="DataAwsccAcmpcaCertificateValidityNotBefore" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBefore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBefore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBefore()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId">cert_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers">policy_qualifiers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_policy_id`<sup>Required</sup> <a name="cert_policy_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId"></a>

```python
cert_policy_id: str
```

- *Type:* str

---

##### `policy_qualifiers`<sup>Required</sup> <a name="policy_qualifiers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers"></a>

```python
policy_qualifiers: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId">policy_qualifier_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier">qualifier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_qualifier_id`<sup>Required</sup> <a name="policy_qualifier_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId"></a>

```python
policy_qualifier_id: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier"></a>

```python
qualifier: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri">cps_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cps_uri`<sup>Required</sup> <a name="cps_uri" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri"></a>

```python
cps_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier">extended_key_usage_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType">extended_key_usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extended_key_usage_object_identifier`<sup>Required</sup> <a name="extended_key_usage_object_identifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier"></a>

```python
extended_key_usage_object_identifier: str
```

- *Type:* str

---

##### `extended_key_usage_type`<sup>Required</sup> <a name="extended_key_usage_type" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType"></a>

```python
extended_key_usage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign">crl_sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly">decipher_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature">digital_signature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly">encipher_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign">key_cert_sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage">DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_sign`<sup>Required</sup> <a name="crl_sign" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign"></a>

```python
crl_sign: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `decipher_only`<sup>Required</sup> <a name="decipher_only" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```python
decipher_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```python
digital_signature: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encipher_only`<sup>Required</sup> <a name="encipher_only" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```python
encipher_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_cert_sign`<sup>Required</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```python
key_cert_sign: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage">DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies">certificate_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions">custom_extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensions">DataAwsccAcmpcaCertificateApiPassthroughExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_policies`<sup>Required</sup> <a name="certificate_policies" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies"></a>

```python
certificate_policies: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a>

---

##### `custom_extensions`<sup>Required</sup> <a name="custom_extensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions"></a>

```python
custom_extensions: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a>

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a>

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensions">DataAwsccAcmpcaCertificateApiPassthroughExtensions</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes"></a>

```python
custom_attributes: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a>

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner">name_assigner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName">party_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_assigner`<sup>Required</sup> <a name="name_assigner" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner"></a>

```python
name_assigner: str
```

- *Type:* str

---

##### `party_name`<sup>Required</sup> <a name="party_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId">type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_id`<sup>Required</sup> <a name="type_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId"></a>

```python
type_id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName">directory_name</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName">edi_party_name</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName">other_name</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId">registered_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name">rfc822_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier">uniform_resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName"></a>

```python
directory_name: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `edi_party_name`<sup>Required</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName"></a>

```python
edi_party_name: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `other_name`<sup>Required</sup> <a name="other_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName"></a>

```python
other_name: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a>

---

##### `registered_id`<sup>Required</sup> <a name="registered_id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId"></a>

```python
registered_id: str
```

- *Type:* str

---

##### `rfc822_name`<sup>Required</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name"></a>

```python
rfc822_name: str
```

- *Type:* str

---

##### `uniform_resource_identifier`<sup>Required</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier"></a>

```python
uniform_resource_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference">DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthrough">DataAwsccAcmpcaCertificateApiPassthrough</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.extensions"></a>

```python
extensions: DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference">DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.subject"></a>

```python
subject: DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference">DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthrough
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthrough">DataAwsccAcmpcaCertificateApiPassthrough</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList <a name="DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes">DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes">DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>

---


### DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference <a name="DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList">DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubject">DataAwsccAcmpcaCertificateApiPassthroughSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes"></a>

```python
custom_attributes: DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList">DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a>

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateApiPassthroughSubject
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateApiPassthroughSubject">DataAwsccAcmpcaCertificateApiPassthroughSubject</a>

---


### DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference <a name="DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBefore">DataAwsccAcmpcaCertificateValidityNotBefore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateValidityNotBefore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityNotBefore">DataAwsccAcmpcaCertificateValidityNotBefore</a>

---


### DataAwsccAcmpcaCertificateValidityOutputReference <a name="DataAwsccAcmpcaCertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_acmpca_certificate

dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidity">DataAwsccAcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAcmpcaCertificateValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificate.DataAwsccAcmpcaCertificateValidity">DataAwsccAcmpcaCertificateValidity</a>

---



