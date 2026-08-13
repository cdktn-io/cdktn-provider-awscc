# `dataAwsccSsmquicksetupConfigurationManager` Submodule <a name="`dataAwsccSsmquicksetupConfigurationManager` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmquicksetupConfigurationManager <a name="DataAwsccSsmquicksetupConfigurationManager" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager#id DataAwsccSsmquicksetupConfigurationManager#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsmquicksetupConfigurationManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions">configuration_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn">manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries">status_summaries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration_definitions`<sup>Required</sup> <a name="configuration_definitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions"></a>

```python
configuration_definitions: DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `manager_arn`<sup>Required</sup> <a name="manager_arn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn"></a>

```python
manager_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status_summaries`<sup>Required</sup> <a name="status_summaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries"></a>

```python
status_summaries: DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfig <a name="DataAwsccSsmquicksetupConfigurationManagerConfig" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager#id DataAwsccSsmquicksetupConfigurationManager#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions()
```


### DataAwsccSsmquicksetupConfigurationManagerStatusSummaries <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn">local_deployment_administration_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName">local_deployment_execution_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion">type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_deployment_administration_role_arn`<sup>Required</sup> <a name="local_deployment_administration_role_arn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```python
local_deployment_administration_role_arn: str
```

- *Type:* str

---

##### `local_deployment_execution_role_name`<sup>Required</sup> <a name="local_deployment_execution_role_name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName"></a>

```python
local_deployment_execution_role_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_version`<sup>Required</sup> <a name="type_version" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion"></a>

```python
type_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a>

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmquicksetup_configuration_manager

dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails">status_details</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">status_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails"></a>

```python
status_details: StringMap
```

- *Type:* cdktn.StringMap

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `status_type`<sup>Required</sup> <a name="status_type" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```python
status_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmquicksetupConfigurationManagerStatusSummaries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a>

---



