# `dataAwsccEksCertificateAuthority` Submodule <a name="`dataAwsccEksCertificateAuthority` Submodule" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksCertificateAuthority <a name="DataAwsccEksCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority awscc_eks_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority#id DataAwsccEksCertificateAuthority#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEksCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEksCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEksCertificateAuthority to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEksCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedAt">activated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedBy">activated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.distributionStatus">distribution_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.rollbackAvailable">rollback_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.scheduledEvents">scheduled_events</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference">DataAwsccEksCertificateAuthorityScheduledEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.signingStatus">signing_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference">DataAwsccEksCertificateAuthorityValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `activated_at`<sup>Required</sup> <a name="activated_at" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedAt"></a>

```python
activated_at: str
```

- *Type:* str

---

##### `activated_by`<sup>Required</sup> <a name="activated_by" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedBy"></a>

```python
activated_by: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `distribution_status`<sup>Required</sup> <a name="distribution_status" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.distributionStatus"></a>

```python
distribution_status: str
```

- *Type:* str

---

##### `rollback_available`<sup>Required</sup> <a name="rollback_available" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.rollbackAvailable"></a>

```python
rollback_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scheduled_events`<sup>Required</sup> <a name="scheduled_events" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.scheduledEvents"></a>

```python
scheduled_events: DataAwsccEksCertificateAuthorityScheduledEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference">DataAwsccEksCertificateAuthorityScheduledEventsOutputReference</a>

---

##### `signing_status`<sup>Required</sup> <a name="signing_status" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.signingStatus"></a>

```python
signing_status: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.validity"></a>

```python
validity: DataAwsccEksCertificateAuthorityValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference">DataAwsccEksCertificateAuthorityValidityOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksCertificateAuthorityConfig <a name="DataAwsccEksCertificateAuthorityConfig" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority#id DataAwsccEksCertificateAuthority#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksCertificateAuthorityScheduledEvents <a name="DataAwsccEksCertificateAuthorityScheduledEvents" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents()
```


### DataAwsccEksCertificateAuthorityValidity <a name="DataAwsccEksCertificateAuthorityValidity" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksCertificateAuthorityScheduledEventsOutputReference <a name="DataAwsccEksCertificateAuthorityScheduledEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.finalAutoActivation">final_auto_activation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.firstAutoActivation">first_auto_activation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents">DataAwsccEksCertificateAuthorityScheduledEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `final_auto_activation`<sup>Required</sup> <a name="final_auto_activation" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.finalAutoActivation"></a>

```python
final_auto_activation: str
```

- *Type:* str

---

##### `first_auto_activation`<sup>Required</sup> <a name="first_auto_activation" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.firstAutoActivation"></a>

```python
first_auto_activation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEksCertificateAuthorityScheduledEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents">DataAwsccEksCertificateAuthorityScheduledEvents</a>

---


### DataAwsccEksCertificateAuthorityValidityOutputReference <a name="DataAwsccEksCertificateAuthorityValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eks_certificate_authority

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity">DataAwsccEksCertificateAuthorityValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEksCertificateAuthorityValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity">DataAwsccEksCertificateAuthorityValidity</a>

---



