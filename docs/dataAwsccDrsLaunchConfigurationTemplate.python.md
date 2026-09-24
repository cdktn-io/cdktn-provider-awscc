# `dataAwsccDrsLaunchConfigurationTemplate` Submodule <a name="`dataAwsccDrsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsLaunchConfigurationTemplate <a name="DataAwsccDrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDrsLaunchConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp">copy_private_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags">copy_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn">export_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">launch_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition">launch_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">launch_into_source_instance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled">post_launch_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">target_instance_type_right_sizing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `copy_private_ip`<sup>Required</sup> <a name="copy_private_ip" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```python
copy_private_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags"></a>

```python
copy_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `export_bucket_arn`<sup>Required</sup> <a name="export_bucket_arn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```python
export_bucket_arn: str
```

- *Type:* str

---

##### `launch_configuration_template_id`<sup>Required</sup> <a name="launch_configuration_template_id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```python
launch_configuration_template_id: str
```

- *Type:* str

---

##### `launch_disposition`<sup>Required</sup> <a name="launch_disposition" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```python
launch_disposition: str
```

- *Type:* str

---

##### `launch_into_source_instance`<sup>Required</sup> <a name="launch_into_source_instance" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```python
launch_into_source_instance: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `licensing`<sup>Required</sup> <a name="licensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing"></a>

```python
licensing: DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `post_launch_enabled`<sup>Required</sup> <a name="post_launch_enabled" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```python
post_launch_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags"></a>

```python
tags: DataAwsccDrsLaunchConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a>

---

##### `target_instance_type_right_sizing_method`<sup>Required</sup> <a name="target_instance_type_right_sizing_method" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```python
target_instance_type_right_sizing_method: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsLaunchConfigurationTemplateConfig <a name="DataAwsccDrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsLaunchConfigurationTemplateLicensing <a name="DataAwsccDrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing()
```


### DataAwsccDrsLaunchConfigurationTemplateTags <a name="DataAwsccDrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">os_byol</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_byol`<sup>Required</sup> <a name="os_byol" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```python
os_byol: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDrsLaunchConfigurationTemplateLicensing
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a>

---


### DataAwsccDrsLaunchConfigurationTemplateTagsList <a name="DataAwsccDrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_launch_configuration_template

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDrsLaunchConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a>

---



