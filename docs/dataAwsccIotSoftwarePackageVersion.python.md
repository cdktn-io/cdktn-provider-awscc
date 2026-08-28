# `dataAwsccIotSoftwarePackageVersion` Submodule <a name="`dataAwsccIotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSoftwarePackageVersion <a name="DataAwsccIotSoftwarePackageVersion" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#id DataAwsccIotSoftwarePackageVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotSoftwarePackageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason">error_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn">package_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe">recipe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus">sbom_validation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact"></a>

```python
artifact: DataAwsccIotSoftwarePackageVersionArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error_reason`<sup>Required</sup> <a name="error_reason" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason"></a>

```python
error_reason: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `package_version_arn`<sup>Required</sup> <a name="package_version_arn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn"></a>

```python
package_version_arn: str
```

- *Type:* str

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe"></a>

```python
recipe: str
```

- *Type:* str

---

##### `sbom`<sup>Required</sup> <a name="sbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom"></a>

```python
sbom: DataAwsccIotSoftwarePackageVersionSbomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a>

---

##### `sbom_validation_status`<sup>Required</sup> <a name="sbom_validation_status" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```python
sbom_validation_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags"></a>

```python
tags: DataAwsccIotSoftwarePackageVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSoftwarePackageVersionArtifact <a name="DataAwsccIotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact()
```


### DataAwsccIotSoftwarePackageVersionArtifactS3Location <a name="DataAwsccIotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location()
```


### DataAwsccIotSoftwarePackageVersionConfig <a name="DataAwsccIotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#id DataAwsccIotSoftwarePackageVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSoftwarePackageVersionSbom <a name="DataAwsccIotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom()
```


### DataAwsccIotSoftwarePackageVersionSbomS3Location <a name="DataAwsccIotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location()
```


### DataAwsccIotSoftwarePackageVersionTags <a name="DataAwsccIotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSoftwarePackageVersionArtifactOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```python
s3_location: DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSoftwarePackageVersionArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a>

---


### DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSoftwarePackageVersionArtifactS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionSbomOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```python
s3_location: DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSoftwarePackageVersionSbom
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a>

---


### DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSoftwarePackageVersionSbomS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionTagsList <a name="DataAwsccIotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotSoftwarePackageVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotSoftwarePackageVersionTagsOutputReference <a name="DataAwsccIotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_software_package_version

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSoftwarePackageVersionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a>

---



