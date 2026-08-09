# `dataAwsccCustomerprofilesIntegration` Submodule <a name="`dataAwsccCustomerprofilesIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesIntegration <a name="DataAwsccCustomerprofilesIntegration" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_integration awscc_customerprofiles_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_integration#id DataAwsccCustomerprofilesIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCustomerprofilesIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCustomerprofilesIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.eventTriggerNames">event_trigger_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.flowDefinition">flow_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.objectTypeName">object_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.objectTypeNames">object_type_names</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList">DataAwsccCustomerprofilesIntegrationObjectTypeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList">DataAwsccCustomerprofilesIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `event_trigger_names`<sup>Required</sup> <a name="event_trigger_names" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.eventTriggerNames"></a>

```python
event_trigger_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `flow_definition`<sup>Required</sup> <a name="flow_definition" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.flowDefinition"></a>

```python
flow_definition: DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference</a>

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

---

##### `object_type_names`<sup>Required</sup> <a name="object_type_names" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.objectTypeNames"></a>

```python
object_type_names: DataAwsccCustomerprofilesIntegrationObjectTypeNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList">DataAwsccCustomerprofilesIntegrationObjectTypeNamesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.tags"></a>

```python
tags: DataAwsccCustomerprofilesIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList">DataAwsccCustomerprofilesIntegrationTagsList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesIntegrationConfig <a name="DataAwsccCustomerprofilesIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_integration#id DataAwsccCustomerprofilesIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesIntegrationFlowDefinition <a name="DataAwsccCustomerprofilesIntegrationFlowDefinition" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinition()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties()
```


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled()
```


### DataAwsccCustomerprofilesIntegrationObjectTypeNames <a name="DataAwsccCustomerprofilesIntegrationObjectTypeNames" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNames()
```


### DataAwsccCustomerprofilesIntegrationTags <a name="DataAwsccCustomerprofilesIntegrationTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName">flow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig">source_flow_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig">trigger_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinition">DataAwsccCustomerprofilesIntegrationFlowDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flow_name`<sup>Required</sup> <a name="flow_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName"></a>

```python
flow_name: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `source_flow_config`<sup>Required</sup> <a name="source_flow_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig"></a>

```python
source_flow_config: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks"></a>

```python
tasks: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList</a>

---

##### `trigger_config`<sup>Required</sup> <a name="trigger_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig"></a>

```python
trigger_config: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinition">DataAwsccCustomerprofilesIntegrationFlowDefinition</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName">datetime_type_field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datetime_type_field_name`<sup>Required</sup> <a name="datetime_type_field_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName"></a>

```python
datetime_type_field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName">connector_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig">incremental_pull_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties">source_connector_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_profile_name`<sup>Required</sup> <a name="connector_profile_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName"></a>

```python
connector_profile_name: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `incremental_pull_config`<sup>Required</sup> <a name="incremental_pull_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig"></a>

```python
incremental_pull_config: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a>

---

##### `source_connector_properties`<sup>Required</sup> <a name="source_connector_properties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties"></a>

```python
source_connector_properties: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo">marketo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce">salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk">zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `marketo`<sup>Required</sup> <a name="marketo" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo"></a>

```python
marketo: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3"></a>

```python
s3: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a>

---

##### `salesforce`<sup>Required</sup> <a name="salesforce" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce"></a>

```python
salesforce: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow"></a>

```python
service_now: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a>

---

##### `zendesk`<sup>Required</sup> <a name="zendesk" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk"></a>

```python
zendesk: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate">enable_dynamic_field_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords">include_deleted_records</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_dynamic_field_update`<sup>Required</sup> <a name="enable_dynamic_field_update" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate"></a>

```python
enable_dynamic_field_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_deleted_records`<sup>Required</sup> <a name="include_deleted_records" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords"></a>

```python
include_deleted_records: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo">marketo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce">salesforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow">service_now</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk">zendesk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `marketo`<sup>Required</sup> <a name="marketo" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo"></a>

```python
marketo: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `salesforce`<sup>Required</sup> <a name="salesforce" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce"></a>

```python
salesforce: str
```

- *Type:* str

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow"></a>

```python
service_now: str
```

- *Type:* str

---

##### `zendesk`<sup>Required</sup> <a name="zendesk" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk"></a>

```python
zendesk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator">connector_operator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField">destination_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields">source_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties">task_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_operator`<sup>Required</sup> <a name="connector_operator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator"></a>

```python
connector_operator: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a>

---

##### `destination_field`<sup>Required</sup> <a name="destination_field" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField"></a>

```python
destination_field: str
```

- *Type:* str

---

##### `source_fields`<sup>Required</sup> <a name="source_fields" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields"></a>

```python
source_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_properties`<sup>Required</sup> <a name="task_properties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties"></a>

```python
task_properties: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a>

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey">operator_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_property_key`<sup>Required</sup> <a name="operator_property_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey"></a>

```python
operator_property_key: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties">trigger_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_properties`<sup>Required</sup> <a name="trigger_properties" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties"></a>

```python
trigger_properties: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a>

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled">scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheduled`<sup>Required</sup> <a name="scheduled" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled"></a>

```python
scheduled: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---


### DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference <a name="DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode">data_pull_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom">first_execution_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_pull_mode`<sup>Required</sup> <a name="data_pull_mode" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode"></a>

```python
data_pull_mode: str
```

- *Type:* str

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom"></a>

```python
first_execution_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_end_time`<sup>Required</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_offset`<sup>Required</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_start_time`<sup>Required</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---


### DataAwsccCustomerprofilesIntegrationObjectTypeNamesList <a name="DataAwsccCustomerprofilesIntegrationObjectTypeNamesList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference <a name="DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNames">DataAwsccCustomerprofilesIntegrationObjectTypeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationObjectTypeNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationObjectTypeNames">DataAwsccCustomerprofilesIntegrationObjectTypeNames</a>

---


### DataAwsccCustomerprofilesIntegrationTagsList <a name="DataAwsccCustomerprofilesIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesIntegrationTagsOutputReference <a name="DataAwsccCustomerprofilesIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_integration

dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTags">DataAwsccCustomerprofilesIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesIntegration.DataAwsccCustomerprofilesIntegrationTags">DataAwsccCustomerprofilesIntegrationTags</a>

---



