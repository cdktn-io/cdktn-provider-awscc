# `dataAwsccLicensemanagerLicenseConfiguration` Submodule <a name="`dataAwsccLicensemanagerLicenseConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseConfiguration <a name="DataAwsccLicensemanagerLicenseConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration awscc_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration#id DataAwsccLicensemanagerLicenseConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLicensemanagerLicenseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.disassociateWhenNotFound">disassociate_when_not_found</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationId">license_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountHardLimit">license_count_hard_limit</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountingType">license_counting_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseExpiry">license_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseRules">license_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.productInformationList">product_information_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList">DataAwsccLicensemanagerLicenseConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disassociate_when_not_found`<sup>Required</sup> <a name="disassociate_when_not_found" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.disassociateWhenNotFound"></a>

```python
disassociate_when_not_found: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `license_configuration_id`<sup>Required</sup> <a name="license_configuration_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationId"></a>

```python
license_configuration_id: str
```

- *Type:* str

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_count_hard_limit`<sup>Required</sup> <a name="license_count_hard_limit" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```python
license_count_hard_limit: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `license_counting_type`<sup>Required</sup> <a name="license_counting_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```python
license_counting_type: str
```

- *Type:* str

---

##### `license_expiry`<sup>Required</sup> <a name="license_expiry" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseExpiry"></a>

```python
license_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_rules`<sup>Required</sup> <a name="license_rules" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseRules"></a>

```python
license_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `product_information_list`<sup>Required</sup> <a name="product_information_list" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.productInformationList"></a>

```python
product_information_list: DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tags"></a>

```python
tags: DataAwsccLicensemanagerLicenseConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList">DataAwsccLicensemanagerLicenseConfigurationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseConfigurationConfig <a name="DataAwsccLicensemanagerLicenseConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration#id DataAwsccLicensemanagerLicenseConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct()
```


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct()
```


### DataAwsccLicensemanagerLicenseConfigurationTags <a name="DataAwsccLicensemanagerLicenseConfigurationTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator">product_information_filter_comparator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName">product_information_filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue">product_information_filter_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_information_filter_comparator`<sup>Required</sup> <a name="product_information_filter_comparator" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator"></a>

```python
product_information_filter_comparator: str
```

- *Type:* str

---

##### `product_information_filter_name`<sup>Required</sup> <a name="product_information_filter_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName"></a>

```python
product_information_filter_name: str
```

- *Type:* str

---

##### `product_information_filter_value`<sup>Required</sup> <a name="product_information_filter_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue"></a>

```python
product_information_filter_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList">product_information_filter_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_information_filter_list`<sup>Required</sup> <a name="product_information_filter_list" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList"></a>

```python
product_information_filter_list: DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct</a>

---


### DataAwsccLicensemanagerLicenseConfigurationTagsList <a name="DataAwsccLicensemanagerLicenseConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_configuration

dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags">DataAwsccLicensemanagerLicenseConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags">DataAwsccLicensemanagerLicenseConfigurationTags</a>

---



